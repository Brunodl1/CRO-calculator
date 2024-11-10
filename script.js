document.addEventListener('DOMContentLoaded', function() {
    // select all input of type range in the topcontainer
    const inputs_sliders = document.querySelector('.top_container').querySelectorAll('input[type="range"]')
    inputs_sliders.forEach(input => {
        input.addEventListener('input', function() {
            updateValues()
        });
    });
    const field_buttons = document.querySelector('.top_container').querySelectorAll('.field_button')

    field_buttons.forEach(button => {
        button.addEventListener('click', function() {
            field_buttons.forEach(button => button.classList.remove('active'));
            button.classList.add('active');

            updateValues()
        });
    });

    updateValues();
    document.getElementById('impact-default').classList.add('active');
    });

    function updateValues() {
    const conversionRate = parseFloat(document.getElementById('conversion-rate').value);
    const averageOrderValue = parseFloat(document.getElementById('average-order-value').value);
    const monthlySessions = parseInt(document.getElementById('monthly-sessions').value);
    console.log()
    const impact = document.querySelector('.field_button.active').getAttribute('value');

    document.getElementById('val1').textContent = conversionRate.toFixed(2);
    document.getElementById('val2').textContent = averageOrderValue.toFixed(0);
    document.getElementById('val3').textContent = monthlySessions.toLocaleString();

    const revenue = calculateRevenue(conversionRate, averageOrderValue, monthlySessions);

    document.getElementById('monthly_revenue').textContent = Math.round(revenue).toLocaleString()
    document.getElementById('extra_monthly_revenue').textContent = Math.round((revenue * (impact / 100))).toLocaleString();
    }

    function calculateRevenue(conversionRate, averageOrderValue, monthlySessions) {
    return (conversionRate / 100) * averageOrderValue * monthlySessions;
    }