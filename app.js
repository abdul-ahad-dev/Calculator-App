let result = document.getElementById('result');


function value(val)
{
    if (result.value === "" && 
            (val === "+" || val === "-" || val === "*" || val === "/" || val === "=" || val === "00" || val === "0")) {
        return; 
    }
    
      result.value += val;
}
function clearAll()
{
    result.value = '';
}
function lastDel()
{
    result.value = result.value.slice(0, -1)
}
function calculate()
{
    result.value = eval(result.value)
}