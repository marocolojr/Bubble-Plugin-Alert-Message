function(properties, context) { 

  var positionNotification = {
    "Top Right":"topRight",
    "Top Center":"topCenter",
    "Top Left":"topLeft",
    "Center":"center",
    "Bottom Right":"bottomRight",
    "Bottom Center":"bottomCenter",
    "Bottom Left":"bottomLeft"
    };
    
   var iconNotification = {
    "None": "",
    "Info":"fa fa-info-circle",
    "Success":"fa fa-check-circle",
    "Error":"fa fa-times-circle",
    "Warning":"fa fa-exclamation-circle"
    };
  
  var animationsIn = {
    "bounce in left":"bounceInLeft",
    "bounce in right":"bounceInRight",
    "bounce in up":"bounceInUp",
    "bounce in down":"bounceInDown",
    "fade in":"fadeIn",
    "fade in down":"fadeInDown",
    "fade in up":"fadeInUp",
    "fade in left":"fadeInLeft",
    "fade in right":"fadeInRight",
    "flip in":"flipInX"
    };   

  var animationsOut = {
    "fadeOut":"fadeOut",
    "fadeOut down":"fadeOutDown",
    "fadeOut up":"fadeOutUp",
    "fadeOut left":"fadeOutLeft",
    "fadeOut right":"fadeOutRight",
    "flipOutX":"flipOutX"
    };    
    
  iziToast.show({
    title: properties.title || ' ',
    titleColor: properties.fontColorTitle,
    message: properties.message || ' ',
    messageColor: properties.fontColorMessage,
    titleSize: properties.fontSizeTitle,
    messageSize: properties.fontSizeMessage,
    backgroundColor: properties.background_color,
    color: properties.background_color,
    icon: iconNotification[properties.icon],
    iconColor: properties.icon_color,
    image: properties.image,
    imageWidth: properties.image_width,
    close: properties.close,
    closeOnEscape: true,
    closeOnClick: true,
    position: positionNotification[properties.position],
    targetFirst: true,
    timeout: properties.timeout,
    animateInside: true,
    drag: true,
    pauseOnHover: true,
    resetOnHover: properties.restart,
    progressBar: properties.progressBarShow,
    progressBarColor: properties.progressBarColor,
    progressBarEasing: 'linear',
    transitionIn: animationsIn[properties.animation_in],
    transitionOut: animationsOut[properties.animation_out],
    transitionInMobile: animationsIn[properties.animation_in_mobile],
    transitionOutMobile: animationsOut[properties.animation_out_mobile],
      
      
    onOpening: function(instance, toast){
        document.getElementsByClassName('iziToast-message')[0].style.fontFamily = properties.fontNameMessage;
        document.getElementsByClassName('iziToast-message')[0].style.fontFamily = properties.fontColorMessage;
        document.getElementsByClassName('iziToast-title')[0].style.fontFamily = properties.fontNameTitle;        
        document.getElementsByClassName('iziToast-message')[0].style.fontWeight = properties.fontWeightMessage;
        document.getElementsByClassName('iziToast-title')[0].style.fontWeight = properties.fontWeightTitle;
    }
});


}