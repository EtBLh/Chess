module.exports = () => {
    this.callInitWindow = (callback) => {
        
    }

    var $page = document.getElementsByClassName('page');

    document.getElementsByClassName('menu_toggle').on('click', function(){
      $page.toggleClass('shazam');
    });
    document.getElementsByClassName('content').on('click', function(){
      $page.removeClass('shazam');
    });

}