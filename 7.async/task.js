class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		const exists = this.alarmCollection.some(alarm => alarm.time === time);
		if (exists) {
			console.warn("Уже присутствует  звонок на это время");
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		})
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}
	getCurrentFormattedTime() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	}
	start() {
		if (this.intervalId !== null) {
			return;
		}
		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
            console.log("Текущие часы:", currentTime);
			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000);
	}
	stop() {
		if (this.intervalId !== null) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

const clock = new AlarmClock();


const testAlarmTime = "22:49"; 

console.log(`Устанавливаю тестовый будильник на ${testAlarmTime}`);

clock.addClock(testAlarmTime, () => {
    console.log(`Тестовый будильник сработал! Время ${testAlarmTime}`);
});
clock.start();