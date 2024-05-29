document.addEventListener('DOMContentLoaded', function () {
    const templateButtons = document.querySelectorAll('.use-template-btn');
  
    templateButtons.forEach(button => {
      button.addEventListener('click', function () {
        const template = this.closest('.template-card');
        const templateImage = template.querySelector('img').src;
        // Implement logic to apply selected template to the resume
        alert(`Template selected: ${templateImage}`);
      });
    });
  });

// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})
