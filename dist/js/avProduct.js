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

//->Listen to button inside menu and create md.circle effect
$(document).on(`click`,`.av-btn`,function(e){
    const button = e.currentTarget;
    const circle = document.createElement(`span`);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter/2;
    

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.offsetX - radius}px`;
    circle.style.top = `${e.offsetY  - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
      }

    button.appendChild(circle);
});

$('.card-body').on('click','.fa-question-circle',(e)=>{
    let attrX = $(e.currentTarget).attr('data-display-info');
    
    if(attrX == 'user1outpost'){
        Swal.fire({
            //title: '<strong>משתמש MOKED</strong>',
            html:`<h3><strong>משתמש MOKED</strong></h3>
            <p>משתמש MOKED מאפשר:</p>
            <ul style="text-align:right;">
                <li>צפייה ביומן כניסות</li>
                <li>שימוש במנוע החיפוש</li>
                <li>שימוש ברשימת היתרים</li>
                <li>שימוש במערכת התראות</li>
                <li>צפייה בניתוח נתונים</li>
            </ul>
            <p class="text-primary">הגישה למשתמש MOKED מוגבלת רק לשני מכשירים בו זמנית</p>
            `
          })
    }
    else if(attrX == 'user2outpost'){
        Swal.fire({
            //title: '<strong>2 Users</strong>',
            html:`<h3><strong>משתמש MOKED</strong></h3>
            <p>משתמש MOKED מאפשר:</p>
            <ul style="text-align:right;">
                <li>צפייה ביומן כניסות</li>
                <li>שימוש במנוע החיפוש</li>
                <li>שימוש ברשימת היתרים</li>
                <li>שימוש במערכת התראות</li>
                <li>צפייה בניתוח נתונים</li>
            </ul>
            <p class="text-primary">הגישה למשתמש MOKED מוגבלת רק לשני מכשירים בו זמנית</p>
            <h3><strong>משתמש GUARD</strong></h3>
            <p>משתמש GUARD מאפשר:</p>
            <ul style="text-align:right;">
                <li>רישום כניסות ידני</li>
                <li>רישום השתייכות נהגים לרכבים</li>
                <li>רישום פרטי נהג: שם פרטי, שם משפחה, מס' פלאפון, חברה, יעד הגעה</li>
            </ul>
            <p class="text-primary">הגישה למשתמש GUARD מוגבלת רק למכשיר אחד</p>`
            
          })
    }
    else if(attrX == 'camera1outpost'){
        Swal.fire({
            title: '<strong>חיבור למצלמה אחד</strong>',
            html:`
            <p>חיבור למצלמת ANPR אחת</p>
            `
          })
    }
    else if(attrX == 'entrances20outpost'){
        Swal.fire({
            title: '<strong>עד <span class="text-primary">20</span> כניסות ביום</strong>',
            html:`<p>חשבון זה מתעד עד 20 כניסות ביום</p>
            <p>לאחר שהגעת ל -20 כניסות השירות יפסיק לתעד רכבים שהגיעו אחר מכן באותו יום</p>
            ` 
          })
    }
    else if(attrX == 'entrances200outpost'){
        Swal.fire({
            title: '<strong>עד <span class="text-primary">200</span> כניסות ביום</strong>',
            html:`<p>חשבון זה מתעד עד 200 כניסות ביום</p>
            <p>לאחר שהגעת ל -200 כניסות השירות יפסיק לתעד רכבים שהגיעו אחר מכן באותו יום</p>
            ` 
          })
    }
    else if(attrX == 'entrancesunlimitedoutpost'){
        Swal.fire({
            title: '<strong>כניסות ביום <span class="text-primary">ללא הגבלה</span></strong>',
            html:`<p>חשבון זה מתעד עד כל הכניסות 24/7</p>
            ` 
          })
    }
    
});

$('.listing').on('click','button',function(e){
    console.log(this);
    console.log($(this).attr('data-product-type'));
    let product = $(this).attr('data-product-type');
    let obj = {
        'home-subscription-outpost':['₪9.90 לחודש','מנוי Home'],
        'pro-subscription-outpost':['₪99.90 לחודש','מנוי Professional'],
        'indust-subscription-outpost':['₪189.90 לחודש','מנוי Industrial']
    }
    for(let x in obj){
        if(x == product){
            $('[data-subscription-td]').html(obj[x][1]).attr('data-subscription-td',x)
            $('[data-price-td]').html(obj[x][0]).attr('data-price-td',x)
        }
    }
    
});

$('.card-tools').on('click','.tool',function(e){

    let tool = {
        tFunction:$(this).attr('data-tool-function'),
        cState:$(this).attr('data-card-state')
    }

    if(tool.tFunction === 'minimizer'){
        if(tool.cState == 'minimized'){
            $(this).attr('data-card-state', 'expanded');
            $(this).html('<i class="fas fa-minus"></i>')
            $(this).parent().parent().parent().find('.card-body').slideDown();
        }
        else if (tool.cState == 'expanded'){
            $(this).attr('data-card-state', 'minimized');
            $(this).html('<i class="fas fa-plus"></i>')
            $(this).parent().parent().parent().find('.card-body').slideUp();
        }
    }
});

//-> form fill
$('[data-form="home_subscription"]').on('click','button',function(e){
    console.log(this);
    if($(this).attr('data-submit') == 'get_product_price'){
        let inputs = {
            'inputName':document.getElementById('inputName').checkValidity(),
            'inputEmail':document.getElementById('inputEmail').checkValidity(),
            'inputPhone':document.getElementById('inputPhone').checkValidity()
        }
        let productType = $('[data-subscription-td]').attr('data-subscription-td');
        
        let formPromise = new Promise((res,rej)=>{
            let count = 0;
            for(let x in inputs){
                if(inputs[x] !== true){
                    console.log(x);
                    $('#'+x).addClass('is-invalid');
                }
                else{
                    //console.log(x, inputs[x]);
                    $('#'+x).removeClass('is-invalid');
                    //->send all details
                    ++count;

                }
            }
            res(count);
        });

        formPromise.then((res,rej)=>{
            if(res === Object.keys(inputs).length){
                console.log('send data', Object.keys(inputs).length);
                Toast.fire({
                    icon: 'success',
                    title: 'Your form has been sent!'
                })
            }
            else if(rej){
                Toast.fire({
                    icon: 'error',
                    title: 'Something wrong in the form!'
                })
            }
        })
        
    }
});