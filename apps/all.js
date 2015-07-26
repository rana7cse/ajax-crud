$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function onread(evt){
    var attr = evt.getAttribute('data-moto');
    $('#EditModal').modal('toggle');
    $.get('get.php?id='+attr,function(e){
        var data = JSON.parse(e);
        $('#EditName').val(data.name);
        $('#EditaddRess').val(data.add);
        $('#EdituserName').val(data.phone);
        $('#regId').val(attr);
    });
}

$('#EditRegistration').click(function(){
    var data = $('#EditForm').serializeObject();

    $.post('update.php',data,function(e){
        //console.log(e);
        if(e == 'success'){
            $('#EditSuccess').html(
                "<div class='alert alert-info fade in'>"+
                "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>"+
                "<strong>Success!</strong> Indicates a successful or positive action. </div>"
            );

            window.setTimeout(function(){
                $('#EditSuccess').html('');
            },3000);

            $('#AjaxTable').dataTable({
                "ajax": 'all.php',
                "bDestroy": true,
                "fnRowCallback" : function(e,m,j){
                    $('td:eq(3)',e).html("<a href='javascript:void(0)' data-moto='"+m[0]+"' onclick=\"onread(this)\">"+m[3]+"</a>");
                }
            });
        }
    });
});

$(function(){
    $('#AjaxTable').dataTable({
        "ajax": 'all.php',
        "bDestroy": true,
        "fnRowCallback" : function(e,m,j){
            $('td:eq(3)',e).html("<a href='javascript:void(0)' data-moto='"+m[0]+"' onclick=\"onread(this)\">"+m[3]+"</a>");
        }
    });

    $('#AddUser').click(function(){
        $('#registrationModal').modal('toggle');
    });
    $('#btnRegistration').click(function(){
        $('#registrationForm').submit();
    });

    $('#registrationForm').submit(function(){
        var data = $(this).serializeObject();

        $.post('insert.php',data,function(e){
            if(e == 'success'){
                $('#registrationSuccess').html(
                    "<div class='alert alert-success fade in'>"+
                    "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>"+
                    "<strong>Success!</strong> Indicates a successful or positive action. </div>"
                );
                $("#registrationForm input").val('');

                window.setTimeout(function(){
                    $('#registrationSuccess').html('');
                },3000);
            }
        });
    });
});