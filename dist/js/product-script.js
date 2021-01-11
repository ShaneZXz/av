$('.av-btn-group').on('click','.av-btn',function(e){
    $(this).parent().find('.av-btn').removeClass('active');
    $(this).addClass('active');
});

