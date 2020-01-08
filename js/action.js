
$(document).ready(function () {
    let load_svg = document.querySelector('#load_svg');
    let load_svgAnimData = {
      container: load_svg,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      // path: 'json/download-icon.json'
      path: 'https://assets9.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json'
    };
    // set bodymovin
    let load_svgAnim = bodymovin.loadAnimation(load_svgAnimData);
    load_svgAnim.setSpeed(0.5);
    //以上loading

});