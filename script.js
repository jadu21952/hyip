// Function to update rewards based on time passed
function updateGrowth(planType, startTime, initialAmount) {
    const now = new Date().getTime();
    const elapsed = now - startTime;
    
    let growth = 0;
    if (planType === 'Hourly') {
        const hours = Math.floor(elapsed / (1000 * 60 * 60));
        growth = initialAmount * 0.05 * Math.min(hours, 10);
    } else if (planType === 'Daily') {
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        growth = initialAmount * 0.10 * Math.min(days, 7);
    }
    
    document.getElementById('rewardBalance').innerText = `$${(initialAmount + growth).toFixed(2)}`;
}
