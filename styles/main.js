document.addEventListener('DOMContentLoaded', () => {
    // Function to get the end time for today at 12 PM
    function getEndTime() {
        const now = new Date();
        let endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0); // 12 PM today

        // If the current time is past 12 PM, set the end time to 12 PM tomorrow
        if (now > endTime) {
            endTime.setDate(endTime.getDate() + 1);
        }

        return endTime.getTime();
    }

    const endTime = getEndTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            clearInterval(interval); // Stop the timer if countdown is over
            document.getElementById('hours-1').textContent = '0';
            document.getElementById('hours-2').textContent = '0';
            document.getElementById('minutes-1').textContent = '0';
            document.getElementById('minutes-2').textContent = '0';
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const hoursStr = hours.toString().padStart(2, '0');
        const minutesStr = minutes.toString().padStart(2, '0');

        document.getElementById('hours-1').textContent = hoursStr.charAt(0);
        document.getElementById('hours-2').textContent = hoursStr.charAt(1);
        document.getElementById('minutes-1').textContent = minutesStr.charAt(0);
        document.getElementById('minutes-2').textContent = minutesStr.charAt(1);
    }

    // Update the timer every second
    const interval = setInterval(updateTimer, 1000);

    // Initial call to populate the timer immediately
    updateTimer();


    // if header is scrolled, change the background color
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});