export default class Observer
{
    constructor(id) {
        this.id = id;
        this.topics = [];
    }

    addTopic(topic)
    {
        if (!this.topics.includes(topic)) {
            this.topics.push(topic);
        }
    }

    addTopics(topics)
    {
        if (topics && topics.length > 0) {
            topics.forEach( topic => {
                this.addTopic(topic);
            })
        }
    }

    removeTopic(topic) {
        this.topics.filter(topicItem => {
            if (topicItem != topic) {
                return topicItem;
            }
        })
    }

    hasTopic(topic)
    {
        return this.topics.includes(topic);
    }

    update(data, callback) {
        console.log(`El observer ${this.id} ha recibido ${data}`);
        callback(data, this.id);
    }
}