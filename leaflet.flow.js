L.CanvasLayer = L.Class.extend({
    includes: [L.Mixin.Events],
    options: {
        fill: !0,
        fillColor: "rgba(51, 153, 255, 0.25)",
        stroke: !0,
        color: "rgba(51, 153, 255, 0.5)",
        weight: 1,
        clickable: !0,
        zoomAnimation: !0,
        redrawWhenMove: !1
    },
    initialize: function (t) {
        L.setOptions(this, t)
    },
    onAdd: function (t) {
        this._map = t,
            this._initCanvas(),
            this._initEvents(),
            t.getPanes().overlayPane.appendChild(this._canvas),
            this.options.redrawWhenMove && t.on("move", this.redraw, this),
            t.on("moveend", this.redraw, this),
            this._draw()
    },
    onRemove: function (t) {
        t.getPanes().overlayPane.removeChild(this._canvas),
            t.off("moveend", this.redraw, this),
            this.options.redrawWhenMove && t.off("move", this.redraw, this),
            this.options.clickable && t.off({
                mousemove: this._mouseMove,
                click: this._click
            }, this),
            this.options.zoomAnimation && L.Browser.any3d && t.off({
                zoomanim: this._animateZoom,
                zoomend: this._endZoom
            }, this)
    },
    addTo: function (t) {
        return t.addLayer(this),
            this
    },
    setData: function (t) {
        this._data = t,
            this.redraw()
    },
    redraw: function () {
        this._draw()
    },
    _draw: function () {
        this._map && this._canvas && (this._updateCanvasViewport(),
            this._update())
    },
    _update: function () { },
    _initCanvas: function () {
        this._canvas = L.DomUtil.create("canvas"),
            this._canvas.style.position = "absolute",
            this.options.zoomAnimation && L.Browser.any3d ? (this._canvas.className = "leaflet-zoom-animated",
                this._map.on("zoomanim", this._animateZoom, this),
                this._map.on("zoomend", this._endZoom, this)) : this._canvas.className = "leaflet-zoom-hide"
    },
    _initEvents: function () {
        this.options.clickable && (this._map.on("mousemove", this._mouseMove, this),
            this._map.on("click", this._click, this))
    },
    _mouseMove: function (t) {
        if (this._map && !this._zooming) {
            var i = this._getFeature(t.layerPoint);
            i ? (this._canvas.style.cursor = "pointer",
                this._mouseInside = !0,
                this.fire("mouseover", t)) : this._mouseInside && (this._canvas.style.cursor = "",
                    this._mouseInside = !1,
                    this.fire("mouseout", t))
        }
    },
    _click: function (t) {
        if (!this._map.dragging || !this._map.dragging.moved()) {
            var i = this._getFeature(t.layerPoint);
            i && (t.feature = i,
                this.fire("click", t))
        }
    },
    _updateCanvasViewport: function () {
        this._zooming || (this._updateViewport(),
            L.DomUtil.setPosition(this._canvas, this._viewport.min))
    },
    _updateViewport: function () {
        var t = this._map.getSize()
            , i = L.DomUtil.getPosition(this._map._mapPane)
            , e = i.multiplyBy(-1)._round()
            , a = e.add(t.multiplyBy(1)._round());
        this._canvas.width = t.x,
            this._canvas.height = t.y,
            this._viewport = new L.Bounds(e, a)
    },
    _animateZoom: function (t) {
        var i = this._map.getZoomScale(t.zoom)
            , e = this._map._getCenterOffset(t.center)._multiplyBy(-i)._add(this._viewport.min);
        this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(e) + " scale(" + i + ") ",
            this._zooming = !0
    },
    _endZoom: function () {
        this._zooming = !1
    },
    _getFeature: function (t) {
        for (var i, e = this._projs || [], a = 0; a < e.length; a++)
            if (i = e[a],
                i && this._containsPoint(i, t))
                return this._data.features[a];
        return null
    },
    _controlPoint: function (t, i) {
        var e = (t.x + i.x) / 2
            , a = (t.y + i.y) / 2
            , n = Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - t.y, 2))
            , o = n / 5;
        if (t.x === i.x)
            return t.y > i.y ? [e - o, a] : [e + o, a];
        if (t.y === i.y)
            return t.x > i.x ? {
                x: e,
                y: a + o
            } : {
                    x: e,
                    y: a - o
                };
        var s = e + (i.y - t.y) / 5
            , r = a + (e - s) * (t.x - e) / (t.y - a);
        return {
            x: s,
            y: r
        }
    },
    _latLng2Screen: function (t, i) {
        var e = this._map.latLngToLayerPoint(new L.latLng(t, i));
        return this._map.layerPointToContainerPoint(e)._round()
    }
}),
    L.CanvasLayer.Flow = L.CanvasLayer.extend({
        options: {
            reverse: !1,
            clickable: !1,
            asyn: !1
        },
        _beziers: [],
        _controls: [],
        _flowend: !1,
        _animid: null,
        initialize: function (t) {
            L.CanvasLayer.prototype.initialize.call(this, t)
        },
        onRemove: function (t) {
            this.clear(),
                L.CanvasLayer.prototype.onRemove.call(this, t)
        },
        setData: function (t) {
            this.stop(),
                this._data = t,
                this._updateBeziers(),
                this.options.asyn ? this._animateAsyn() : this._animate()
        },
        _update: function () {
            if (this._data) {
                if (this._updateBeziers(),
                    !this._flowend)
                    return void (this.options.asyn ? this._animateAsyn() : this._animate());
                var t, i, e = this._map.getSize(), a = this._canvas.getContext("2d"), n = this._data.geo;
                this.options.reverse ? (t = this._data.to,
                    i = this._data.from) : (t = this._data.from,
                        i = this._data.to);
                var o, s, r, h, l = this.options, _ = n[t], c = this._latLng2Screen(_[1], _[0]);
                a.clearRect(0, 0, e.x, e.y);
                for (var d = 0; d < i.length; d++)
                    o = n[i[d]],
                        s = this._latLng2Screen(o[1], o[0]),
                        r = this._controls[d],
                        h = this._beziers[d],
                        a.lineWidth = 0,
                        // a.lineWidth = l.weight + 4,
                        a.strokeStyle = "rgba(255, 255, 255, 0)",//隐藏线
                        // a.strokeStyle = "rgba(255, 255, 255, 0.15)",
                        this._curve(a, c, r, s),
                        a.lineWidth = 0,
                        a.strokeStyle = this._color(d, 0),//隐藏线
                        // a.lineWidth = l.weight,
                        // a.strokeStyle = this._color(d, .8),
                        this._curve(a, c, r, s),
                        a.fillStyle = this._color(d, 0),// 隐藏箭头
                        // a.fillStyle = this._color(d, 1),
                        this._arrow(a, h[h.length - 1], h[h.length - 2])
            }
        },
        _animate: function () {
            if (this._data) {
                this._animid && (L.Util.cancelAnimFrame(this._animid),
                    this._animid = null);
                var t, i = this._map.getSize(), e = this._canvas.getContext("2d"), a = this._beziers, n = this.options, o = this, s = 0, r = 40, h = function () {
                    if (++s,
                        r >= s) {
                        e.clearRect(0, 0, i.x, i.y);
                        for (var l = 0; l < a.length; l++)
                            t = a[l].slice(0, s),
                                e.lineWidth = n.weight + 4,
                                e.strokeStyle = "rgba(255, 255, 255,0)",// 初始化线隐藏
                                // e.strokeStyle = "rgba(255, 255, 255, 0.15)",
                                o._line(e, t),
                                e.lineWidth = n.weight,
                                e.strokeStyle = o._color(l,0),// 初始化线隐藏
                                // e.strokeStyle = o._color(l, .8),// 初始化线隐藏
                                o._line(e, t),
                                s > 1 && (e.fillStyle = o._color(l, 0),
                                // s > 1 && (e.fillStyle = o._color(l, 1),
                                    o._arrow(e, t[t.length - 1], t[t.length - 2]));
                        o._animid = L.Util.requestAnimFrame(h, o)
                    } else
                        L.Util.cancelAnimFrame(o._animid),
                            o._flowend = !0,
                            o._update(),
                            o.fire("flowend", {
                                data: o._data
                            })
                };
                this._animid = L.Util.requestAnimFrame(h, this)
            }
        },
        _animateAsyn: function () {
            if (this._data) {
                this._animid && (L.Util.cancelAnimFrame(this._animid),
                    this._animid = null);
                var t, i, e, a, n, o = this._map.getSize(), s = this._canvas.getContext("2d"), r = this._beziers, h = this.options, l = this, _ = 0, c = 0;
                for (t = 0; t < r.length; t++)
                    c += r[t].length;
                var d = function () {
                    if (++_,
                        c >= _) {
                        for (s.clearRect(0, 0, o.x, o.y),
                            e = 0,
                            a = _,
                            t = 0; t < r.length && !((a -= r[t].length) <= 0); t++)
                            ++e;
                        for (a += r[e].length,
                            i = 0; e > i; i++)
                            n = r[i],
                                s.lineWidth = h.weight + 4,
                                s.strokeStyle = "rgba(255, 255, 255, 0.15)",
                                l._line(s, n),
                                s.lineWidth = h.weight,
                                s.strokeStyle = l._color(i, .8),
                                l._line(s, n),
                                s.fillStyle = l._color(i, 1),
                                l._arrow(s, n[n.length - 1], n[n.length - 2]);
                        a > 1 && (n = r[i].slice(0, a),
                            s.lineWidth = h.weight + 4,
                            s.strokeStyle = "rgba(255, 255, 255, 0.15)",
                            l._line(s, n),
                            s.lineWidth = h.weight,
                            s.strokeStyle = l._color(i, .8),
                            l._line(s, n),
                            s.fillStyle = l._color(i, 1),
                            l._arrow(s, n[n.length - 1], n[n.length - 2])),
                            l._animid = L.Util.requestAnimFrame(d, l)
                    } else
                        L.Util.cancelAnimFrame(l._animid),
                            l._flowend = !0,
                            l._update(),
                            l.fire("flowend", {
                                data: l._data
                            })
                };
                this._animid = L.Util.requestAnimFrame(d, this)
            }
        },
        _curve: function (t, i, e, a) {
            t.beginPath(),
                t.moveTo(i.x, i.y),
                t.quadraticCurveTo(e.x, e.y, a.x, a.y),
                t.stroke(),
                t.closePath()
        },
        _line: function (t, i) {
            if (i && !(i.length < 1)) {
                t.beginPath(),
                    t.moveTo(i[0][0], i[0][1]);
                for (var e = 1; e < i.length; e++)
                    t.lineTo(i[e][0], i[e][1]);
                t.stroke(),
                    t.closePath()
            }
        },
        _arrow: function (t, i, e) {
            var a = this._angle(i, e)
                , n = this._arrowPoints(i);
            t.save(),
                t.beginPath(),
                t.translate(i[0], i[1]),
                t.moveTo(0, 0),
                t.rotate(a);
            for (var o = 0; o < n.length; o++)
                t.lineTo(n[o].x - i[0], n[o].y - i[1]);
            t.fill(),
                t.restore()
        },
        _angle: function (t, i) {
            return t[0] === i[0] ? t[1] > i[1] ? Math.PI : 0 : t[1] === i[1] ? t[0] < i[0] ? -Math.PI / 2 : Math.PI / 2 : t[0] < i[0] ? t[1] < i[1] ? -Math.atan((i[0] - t[0]) / (i[1] - t[1])) : -Math.PI / 2 - Math.atan((i[1] - t[1]) / (t[0] - i[0])) : t[1] < i[1] ? Math.atan((t[0] - i[0]) / (i[1] - t[1])) : Math.PI / 2 + Math.atan((t[1] - i[1]) / (t[0] - i[0]))
        },
        _arrowPoints: function (t) {
            var i = 8
                , e = {}
                , a = {}
                , n = {}
                , o = Math.sqrt(3);
            return a.x = t[0],
                a.y = t[1] + i,
                e.x = Math.round(t[0] - i * o / 2),
                n.x = Math.round(t[0] + i * o / 2),
                e.y = n.y = t[1] + 3 * i / 2,
                [e, a, n]
        },
        _updateBeziers: function () {
            this._beziers = [],
                this._controls = [];
            var t, i, e = this._data.geo;
            this.options.reverse ? (t = this._data.to,
                i = this._data.from) : (t = this._data.from,
                    i = this._data.to);
            for (var a, n, o, s, r = e[t], h = this._latLng2Screen(r[1], r[0]), l = 0; l < i.length; l++)
                a = e[i[l]],
                    n = this._latLng2Screen(a[1], a[0]),
                    this.options.reverse ? (o = this._controlPoint(n, h),
                        s = this._bezier(n, o, h)) : (o = this._controlPoint(h, n),
                            s = this._bezier(h, o, n)),
                    this._beziers.push(s),
                    this._controls.push(o)
        },
        _bezier: function (t, i, e) {
            for (var a, n, o, s = [], r = .025, h = 0; 1 >= h; h += r)
                a = Math.pow(1 - h, 2) * t.x + 2 * h * (1 - h) * i.x + Math.pow(h, 2) * e.x,
                    n = Math.pow(1 - h, 2) * t.y + 2 * h * (1 - h) * i.y + Math.pow(h, 2) * e.y,
                    s.length > 0 && (o = s[s.length - 1],
                        o[0] === a && o[1] === n) || s.push([a, n]);
            return o = s[s.length - 1],
                (o[0] !== e.x || o[1] !== e.y) && s.push([e.x, e.y]),
                s
        },
        _color: function (t, i) {
            var e = this._data.colors;
            return "rgba(" + e[t % e.length].concat(i).join(",") + ")"
        },
        stop: function () {
            this._animid && (L.Util.cancelAnimFrame(this._animid),
                this._animid = null);
            var t = this._map.getSize();
            this._canvas.getContext("2d").clearRect(0, 0, t.x, t.y),
                this._flowend = !1
        },
        clear: function () {
            this.stop(),
                this._data = null
        }
    }),
    L.CanvasLayer.flow = function (t) {
        return new L.CanvasLayer.Flow(t)
    };
    /**移动的圆形 */
    L.CanvasLayer.MovingCircle = L.CanvasLayer.extend({
        options: {
            reverse: !1,
            clickable: !1,
            redrawWhenMove: !0
        },
        _beziers: [],
        _controls: [],
        _indexes: [],
        _animid: null,
        initialize: function (t) {
            L.CanvasLayer.prototype.initialize.call(this, t)
        },
        onRemove: function (t) {
            this.clear(),
                L.CanvasLayer.prototype.onRemove.call(this, t)
        },
        setData: function (t) {
            this._data = t,
                this._update()
        },
        _update: function () {
            this._data && (this._updateBeziers(),
                this._move())
        },
        _move: function () {
            this.stop(),
                this._reset();
            var t, i, e, a, n = this._map.getSize(), o = this._canvas.getContext("2d"), s = this._beziers, r = this;
            t = this.options.reverse ? this._data.from : this._data.to;
            var h = function () {
                o.clearRect(0, 0, n.x, n.y);
                for (var l = 0; l < t.length; l++)
                    r._indexes[l] === s[l].length && (r._indexes[l] = 1),
                        i = s[l].slice(0, r._indexes[l]),
                        o.lineWidth = 0,
                        // 隐藏线
                        // o.lineWidth = 6,
                        // o.strokeStyle = r._color(l, 0),
                        o.strokeStyle = r._color(l, .15),
                        r._line(o, i),
                        e = s[l][r._indexes[l]],
                        a = s[l][r._indexes[l] - 1],
                        r._flare(o, e, a, l),
                        ++r._indexes[l];
                r._animid = L.Util.requestAnimFrame(h, r)
            };
            this._animid = L.Util.requestAnimFrame(h, this)
        },
        _line: function (t, i) {
            if (i && !(i.length < 1)) {
                t.beginPath(),
                    t.moveTo(i[0][0], i[0][1]);
                for (var e = 1; e < i.length; e++)
                    t.lineTo(i[e][0], i[e][1]);
                t.stroke(),
                    t.closePath()
            }
        },
        _flare: function (t, i, e, a) {
            var n = this._angle(i, e)
                , o = this._flarePoints(i);
            t.save(),
                // 绘制线
                t.beginPath(),
                t.translate(i[0], i[1]),
                t.moveTo(0, 0),
                t.rotate(n),
                t.moveTo(o[0].x - i[0], o[0].y - i[1]),
                t.lineTo(o[1].x - i[0], o[1].y - i[1]),
                t.lineTo(o[2].x - i[0], o[2].y - i[1]),
                t.fillStyle = "rgba(0, 255, 255, 0.5)",
                t.fill(),
                // 绘制弧线
                t.beginPath(),
                t.arc(0, 0, 2, 0, Math.PI, !0), // 圆形弧度
                t.fill(),
                t.restore()
        },
        _flarePoints: function (t) {
            var i = 2
                , e = 20 // 线长
                , a = {}
                , n = {}
                , o = {}
                , s = {};
            return a.x = t[0] - i,
                o.x = t[0] + i,
                n.x = s.x = t[0],
                a.y = o.y = t[1],
                n.y = t[1] + e,
                s.y = t[1] - 2 * i,
                [a, n, o, s]
        },
        _angle: function (t, i) {
            return t[0] === i[0] ? t[1] > i[1] ? Math.PI : 0 : t[1] === i[1] ? t[0] < i[0] ? -Math.PI / 2 : Math.PI / 2 : t[0] < i[0] ? t[1] < i[1] ? -Math.atan((i[0] - t[0]) / (i[1] - t[1])) : -Math.PI / 2 - Math.atan((i[1] - t[1]) / (t[0] - i[0])) : t[1] < i[1] ? Math.atan((t[0] - i[0]) / (i[1] - t[1])) : Math.PI / 2 + Math.atan((t[1] - i[1]) / (t[0] - i[0]))
        },
        _updateBeziers: function () {
            this._beziers = [],
                this._controls = [];
            var t, i, e = this._data.geo;
            this.options.reverse ? (t = this._data.to,
                i = this._data.from) : (t = this._data.from,
                    i = this._data.to);
            for (var a, n, o, s, r = e[t], h = this._latLng2Screen(r[1], r[0]), l = 0; l < i.length; l++)
                a = e[i[l]],
                    n = this._latLng2Screen(a[1], a[0]),
                    this.options.reverse ? (o = this._controlPoint(n, h),
                        s = this._bezier(n, o, h)) : (o = this._controlPoint(h, n),
                            s = this._bezier(h, o, n)),
                    this._beziers.push(s),
                    this._controls.push(o)
        },
        _bezier: function (t, i, e) {
            for (var a, n, o, s = [], r = .75 / Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)), h = 0; 1 >= h; h += r)
                a = Math.pow(1 - h, 2) * t.x + 2 * h * (1 - h) * i.x + Math.pow(h, 2) * e.x,
                    n = Math.pow(1 - h, 2) * t.y + 2 * h * (1 - h) * i.y + Math.pow(h, 2) * e.y,
                    s.length > 0 && (o = s[s.length - 1],
                        o[0] === a && o[1] === n) || s.push([a, n]);
            return o = s[s.length - 1],
                (o[0] !== e.x || o[1] !== e.y) && s.push([e.x, e.y]),
                s
        },
        _gradient: function (t, i, e, a, n) {
            var o = t.createRadialGradient(i[0], i[1], 0, i[0], i[1], e);
            return o.addColorStop(0, "rgba(255, 255, 255, 0.9)"),
                o.addColorStop(.75, "rgba(255, 255, 255, 0.75)"),
                o.addColorStop(1, this._color(a, n)),
                o
        },
        _color: function (t, i) {
            var e = this._data.colors;
            return "rgba(" + e[t % e.length].concat(i).join(",") + ")"
        },
        _reset: function () {
            var t;
            t = this.options.reverse ? this._data.from : this._data.to;
            for (var i = 0; i < t.length; i++)
                this._indexes[i] = 1
        },
        stop: function () {
            this._animid && (L.Util.cancelAnimFrame(this._animid),
                this._animid = null);
            var t = this._map.getSize();
            this._canvas.getContext("2d").clearRect(0, 0, t.x, t.y)
        },
        clear: function () {
            this.stop(),
                this._data = null
        }
    }),
    L.CanvasLayer.movingCircle = function (t) {
        return new L.CanvasLayer.MovingCircle(t)
    };
    /**闪烁圆圈效果 */
    L.CanvasLayer.AnimateCircle = L.CanvasLayer.extend({
        options: {
            reverse: !1,
            clickable: !1,
            redrawWhenMove: !0
        },
        _rs: [],
        _first: [],
        _animid: null,
        initialize: function (t) {
            L.CanvasLayer.prototype.initialize.call(this, t)
        },
        onRemove: function (t) {
            this.clear(),
                L.CanvasLayer.prototype.onRemove.call(this, t)
        },
        _update: function () {
            this._data && this._animate()
        },
        _animate: function () {
            this.stop(),
                this._reset();
            var t, i, e, a, n, o, s, r = this._map.getSize(), h = this._canvas.getContext("2d"), l = this._data.geo, _ = this, c = .2, d = 5, m = !1;
            this.options.reverse ? (t = this._data.to,
                i = this._data.from) : (t = this._data.from,
                    i = this._data.to);
            var u = function () {
                e = l[t],
                    a = _._latLng2Screen(e[1], e[0]),
                    m ? 5 >= d ? m = !1 : d -= .1 : 10 > d ? d += .1 : m = !0,
                    s = h.createRadialGradient(a.x, a.y, 0, a.x, a.y, d),
                    s.addColorStop(0, "rgba(255, 51, 51, 1)"),
                    s.addColorStop(.85, "rgba(255, 51, 51, 0.75)"),
                    s.addColorStop(1, "rgba(255, 255, 255, 0.25)"),
                    h.clearRect(0, 0, r.x, r.y),
                    h.fillStyle = s,
                    h.beginPath(),
                    h.arc(a.x, a.y, d, 0, 2 * Math.PI),
                    h.fill();
                for (var f = 0; f < i.length; f++)
                    e = l[i[f]],
                        a = _._latLng2Screen(e[1], e[0]),
                        o = _._radius(i[f]),
                        _._rs[f] < o ? _._rs[f] += c : (_._rs[f] = 0,
                            _._first[f] = !1),
                        n = _._rs[f],
                        15 > n && !_._first[f] && (s = _._gradient(h, a, o - n * c, f, .25 - .01 * n, .8 - .05 * n),
                            _._circle(h, s, a, o - n * c)),
                        s = _._gradient(h, a, n, f, .25, .8),
                        _._circle(h, s, a, n);
                _._animid = L.Util.requestAnimFrame(u, _)
            };
            this._animid = L.Util.requestAnimFrame(u, this)
        },
         // 绘制圆形
        _circle: function (t, i, e, a) {
            t.fillStyle = i,
                t.beginPath(),
                t.arc(e.x, e.y, a, 0, 2 * Math.PI),
                t.fill()
        },
        // 圆形动画渐变
        _gradient: function (t, i, e, a, n, o) {
            var s = t.createRadialGradient(i.x, i.y, 0, i.x, i.y, e);
            return s.addColorStop(0, "rgba(0, 0, 0, 0)"),
                s.addColorStop(.25, "rgba(0, 0, 0, 0)"),
                s.addColorStop(.85, this._color(a, n)),
                s.addColorStop(1, this._color(a, o)),
                s
        },
        _color: function (t, i) {
            var e = this._data.colors;
            return "rgba(" + e[t % e.length].concat(i).join(",") + ")"
        },
        _radius: function (t) {
            var i = this._data.count
                , e = 10
                , a = 40;
            return e + Math.round((a - e) * (i[t] - i.min) / (i.max - i.min))
        },
        _reset: function () {
            var t;
            t = this.options.reverse ? this._data.from : this._data.to;
            for (var i = 0; i < t.length; i++)
                this._rs[i] = 0,
                    this._first[i] = !0
        },
        stop: function () {
            this._animid && (L.Util.cancelAnimFrame(this._animid),
                this._animid = null);
            var t = this._map.getSize();
            this._canvas.getContext("2d").clearRect(0, 0, t.x, t.y)
        },
        clear: function () {
            this.stop(),
                this._data = null
        }
    }),
    L.CanvasLayer.animateCircle = function (t) {
        return new L.CanvasLayer.AnimateCircle(t)
    }
    ,
    L.TileLayer.EsriTileLayer = L.TileLayer.extend({
        initialize: function (t, i) {
            t += "/tile/{z}/{y}/{x}",
                L.TileLayer.prototype.initialize.call(this, t, i)
        }
    }),
    L.tileLayer.esriTileLayer = function (t, i) {
        return new L.TileLayer.EsriTileLayer(t, i)
    };
