$('.av-btn-group').on('click','.av-btn',function(e){
    $(this).parent().find('.av-btn').removeClass('active');
    $(this).addClass('active');
    if($(this).data('av-btn') === 'bp-plus'){
        $('[data-bp-plus]').fadeIn('slow');
    }
    else if($(this).data('av-btn') === 'bp-reg'){
        $('[data-bp-plus]').fadeOut('slow');
    }
});

