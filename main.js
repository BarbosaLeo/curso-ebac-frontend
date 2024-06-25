$(document).ready(function() {
    
    $('#task-form').on('submit', function(event) {
        event.preventDefault();
        
        var taskText = $('#task-input').val().trim(); 
        if (taskText) {
            
            $('#task-list').append('<li>' + taskText + '</li>');
            $('#task-input').val('');
        }
    });
    
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});