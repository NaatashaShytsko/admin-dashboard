$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
});
var Circle = function (sel) {
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles, function (el) {
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl * 408 / 100;
        if ((document.body.clientWidth <= '1200') && (document.body.clientWidth >= '992')) {
            el.innerHTML = '<figure><svg width="140" height="140"><circle transform="rotate(-90)" r="55" cx="-70" cy="70" /><circle transform="rotate(-90)" style=" stroke-dasharray:' + valEl + 'px 408px;" r="55" cx="-70" cy="70" /><text  x="50%" y="50%" alignment-baseline="middle" text-anchor="middle">' + el.innerHTML + '</text></svg><figcaption></figcaption></figure>';

        }
        else
            el.innerHTML = '<figure><svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style=" stroke-dasharray:' + valEl + 'px 408px;" r="65" cx="-80" cy="80" /><text  x="50%" y="50%" alignment-baseline="middle" text-anchor="middle">' + el.innerHTML + '</text></svg><figcaption></figcaption></figure>';

    });
};
Circle('.circle');
var chart = new Chartist.Line('.ct-chart', {
    labels: ['8:00', '9:30', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30'],
    series: [
        [18, 14, 15, 11, 18, 15, 12, 15],
        [16, 12, 13, 9, 16, 13, 10, 13]
    ]
}, {
    low: 0,
    showArea: true,
    showPoint: false,
    height: 300,
    axisY: {
        showLabel: false,
        showGrid: false
    }
});
chart.on('draw', function (data) {
    if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
            d: {
                begin: 2000 * data.index,
                dur: 2000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
            }
        });
    }
});