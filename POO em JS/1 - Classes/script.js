class Task {
    constructor (title, description) {
        this.title = title;
        this.description = description;
        this.complete = false;
    }

    conclusion () {
        this.complete = true;
    }

    get descriptionTask () {
        return `${this.complete ? '✅':'❌'} Description of Task: ${this.description}`;
    }

    set newDescription (value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Texto inválido.')
        };
        this.description = value;
    }

    static createUrgent (value) {
        const task = new Task(`⚠️  Urgent: ${value}`);
        return task;
    }

}

const t1 = new Task('Study JavaScript', 'PLay the video class about classes.')
console.log(t1.title)
console.log(t1.descriptionTask)
console.dir(t1)
console.log(t1.complete)
t1.complete = true
console.log(t1.complete)
console.log(t1.descriptionTask)

const t2 = Task.createUrgent('Be carefull of you health.')

console.log(t2.title)