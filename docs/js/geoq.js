

var centerPoint = [35.63452, 109.132287];
var _cityData = [];
var geoq = {
    colors: ["#e73336", "#dbe900", "#00e92f", "#00e6ff", "#0050ff"].reverse(),
    init: function () {
        this._map();
        this._data2();
        // this._visit();
    },
    _map: function () {
        this.map = L.map("map",
            {
                center: centerPoint,
                zoom: 5,
                minZoom: 1,
                maxZoom: 16,
                attributionControl: !1
            });
        // .setView([1.05463, 87.85938], 3);
        var t = "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer";
        L.tileLayer.esriTileLayer(t, {
            opacity: 1,
            zIndex: 0
        }).addTo(this.map);
        var e = L.control.attribution();
        e.addAttribution("那些我去过的城市"),
            e.addAttribution('<a href="http://giscafer.com" target="_blank">@giscafer</a>'),
            e.addTo(this.map)
    },
    _data: function () {
        var t = this.util
            , e = this;
        t.getText("data/data.txt", function (n) {
            var o = t.csv(n)
                , r = e._parse(o);
            e._points(r),
                e._flow(r)
        }, function (t) {
            alert("数据下载失败!")
        })
    },
    _data2: function () {
        var t = this.util
            , e = this;
        t.getText("data/data.json?v=" + new Date().getTime(), function (o) {
            o = JSON.parse(o);
            _cityData = o.rows;
            // console.log(_cityData)
            var r = e._parse(o);
            e._points(r),
                e._flow(r)
        }, function (t) {
            alert("数据下载失败!")
        })
    },
    _parse: function (t) {
        for (var e, n, o, r, i, a = t.rows, s = {
            from: "中国",
            to: [],
            geo: {},
            count: {},
            colors: [],
            countries: []
        }, l = -(1 / 0), c = 1 / 0, u = a.length, f = 50, p = 0; u > p; p++)
            e = a[p],
                n = e["city"],
                i = +e["times"],
                o = +e.X_COORD,
                r = +e.Y_COORD,
                f > p && (c > i && (c = i),
                    i > l && (l = i),
                    s.to.push(n),
                    s.count[n] = i),
                s.geo[n] = [o, r],
                s.countries.push(n);
        return s.geo[s.from] = centerPoint,
            s.colors = this.util.gradient(this.colors, f),
            s.count.min = c,
            s.count.max = l,
            s
    },
    _points: function (t) {
        for (var e, n, o = t.countries, r = 0, i = o.length; i > r; r++) {
            e = t.geo[o[r]];
            var city = getCityData(o[r]);
            var urls = city.imgs || [];
            var picHtml = generatePicHtml(city['city'], urls);
            n = L.latLng(e[1], e[0]);
            L.circleMarker(n, {
                color: "#ffc32c",
                opacity: 0,
                weight: 1,
                fillColor: "#ffc32c",
                fillOpacity: 1
            }).setRadius(3).addTo(this.map);
            var myIcon = L.icon({
                iconUrl: './lib/leaflet-0.7.3/images/marker-icon.png',
                iconAnchor: [20, 20]
            });
            // 透明marker作为点击事件
            var marker = L.marker(n, {
                color: "#ffc32c",
                opacity: 0,
                weight: 1,
                fillColor: "#ffc32c",
                fillOpacity: 1,
                icon: myIcon
            }).addTo(this.map)
                // 点击气泡弹窗
                .bindPopup(
                    "<h3>" + city['city'] +
                    "</h3>" +
                    city['date'] +
                    "<br>" + city['remark'] +
                    "<br>" + picHtml);
            /* marker.on('click', function (e) {
                console.log(e);
            }) */
        }
    },
    _flow: function (t) {
        var e = (new L.CanvasLayer.flow).addTo(this.map)
            , n = (new L.CanvasLayer.movingCircle).addTo(this.map)
            , o = (new L.CanvasLayer.animateCircle).addTo(this.map);
        e.on("flowend", function (t) {
            // n.setData(t.data);   
            o.setData(t.data);
        });
        e.setData(t)
    },
    _visit: function () {
        this.util.get("proxy.jsp?http://media.geoq.cn/media/geoq.do?handler=map&opt=visit&appid=e3b6b43a-1a5f-4a47-bf72-ec1436ced686&platform=mobile")
    },
    iframe: function () {
        var t = document.createElement("iframe");
        t.setAttribute("width", "0"),
            t.setAttribute("height", "0"),
            t.setAttribute("src", "http://www.geoq.cn/baidumedia.html?appid=e3b6b43a-1a5f-4a47-bf72-ec1436ced686"),
            t.style.display = "none",
            document.body.appendChild(t)
    }
};
geoq.util = {
    get: function (t, e, n) {
        var o = new XMLHttpRequest
            , r = this;
        return o.open("GET", t, !0),
            o.send(null),
            o.onload = function (t) {
                var n = t.target.responseText;
                "function" == typeof e && e.call(r, JSON.parse(n))
            }
            ,
            o.onerror = function (t) {
                "function" == typeof n && n.call(r, t)
            }
            ,
            o
    },
    getText: function (t, e, n, o) {
        var r = new XMLHttpRequest
            , i = this;
        return r.open("GET", t, !0),
            r.send(null),
            r.onload = function (t) {
                var n = t.target.responseText;
                e.call(i, n)
            }
            ,
            r.onerror = function (t) {
                "function" == typeof n && n.call(i, t)
            }
            ,
            r.onprogress = function (t) {
                "function" == typeof o && t.lengthComputable && o.call(i, t)
            }
            ,
            r
    },
    csv: function (t) {
        if (!t)
            return null;
        var e = t.split("\n");
        if (!e || e.length < 2)
            return null;
        for (var n = e.shift().split(","), o = [], r = 0; r < n.length; r++)
            n[r] = n[r].trim().replace("\n", "").replace("\r", "");
        for (var i = 0, a = e.length; a > i; i++)
            if ("" !== e[i].trim()) {
                for (var s = e[i].split(","), l = {}, r = 0; r < n.length; r++) {
                    var c = s[r];
                    c ? c.indexOf("\r") > -1 && (c = c.replace("\r", "")) : c = "",
                        l[n[r]] = c.trim()
                }
                o.push(l)
            }
        return {
            fields: n,
            rows: o
        }
    },
    gradient: function (t, e) {
        for (var n = [], o = 0; o < t.length; o++)
            n.push(this.hex2rgb(t[o]));
        if (e <= n.length)
            return n.slice(0, e);
        for (var r, i, a, s = n.length, l = [n[0]], c = 1; e - 1 > c; c++)
            r = Math.floor(c * (s - 1) / (e - 1)),
                i = c * (s - 1) / (e - 1) - r,
                a = this._color(n[r], n[r + 1], i),
                l.unshift(a);
        return l.unshift(n[s - 1]),
            l
    },
    _color: function (t, e, n) {
        return [Math.round(t[0] + (e[0] - t[0]) * n), Math.round(t[1] + (e[1] - t[1]) * n), Math.round(t[2] + (e[2] - t[2]) * n)]
    },
    hex2rgb: function (t) {
        var e = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15
        }
            , n = /^#[0-9A-F]{3,6}$/
            , o = [];
        return "string" == typeof t && n.test(t.toUpperCase()) && (t = t.slice(1).toUpperCase(),
            3 === t.length ? o = [16 * e[t[0]] + e[t[0]], 16 * e[t[1]] + e[t[1]], 16 * e[t[2]] + e[t[2]]] : 6 === t.length && (o = [16 * e[t[0]] + e[t[1]], 16 * e[t[2]] + e[t[3]], 16 * e[t[4]] + e[t[5]]])),
            o
    },
},
    L.DomEvent.on(document, "DOMContentLoaded", function () {
        geoq.init(),
            geoq.iframe()
    });

window.getCityData = function (cityName) {
    for (let i = 0; i < _cityData.length; i++) {
        var item = _cityData[i];
        if (item['city'] === cityName) {
            return item;
        }
    }
}
window.viewPic = function (cityName) {
    var city = getCityData(cityName);

    var galley = document.getElementById('galley');
    var viewer = new Viewer(galley, {
        url: 'data-original',
        hidden: function () {
            viewer.destroy();
        }
    });
    viewer.show();
};

window.generatePicHtml = function (cityName, urls) {
    var _html = '<div id="galley"><ul class="pictures" onclick="viewPic(\'' + cityName + '\')">';
    for (var i = 0; i < urls.length; i++) {
        var url = './data/pictures/' + urls[i];
        var display='style="display:inline-block"';
        if(i>5){
            display='style="display:none"';
        }
        _html += '<li '+display+'><img data-original="' + url + '" src="' + url + '" alt="图片预览"></li>';
    }
    _html += '</ul></div></div>';

    return _html;
}