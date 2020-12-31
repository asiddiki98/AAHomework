console.log("Hello from the JavaScript console!");

$.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
    success: function(data){
        console.log(data)
    },
    error(){
        console.log("an error occurred")
    }
})
// Your AJAX request here

// Add another console log here, outside your AJAX request
console.log("yo what it do")