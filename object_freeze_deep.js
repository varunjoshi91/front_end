function deepFreeze(obj) {
	if (typeof obj !== 'object') {
		return;
	}

	for(const item of Object.values(obj)) {
		deepFreeze(item);
	}

	return Object.freeze(obj);
}