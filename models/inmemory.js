const Qcm = require('./qcm');

const qcms = [
    new Qcm({ id: 0, name: 'Introduction Vanilla JS', nbpoints: 20, subject: 'Javascript', questions: [], answers: [] }),
];

const addQcm = (rawObject) => {

    let maxId = 0;

    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });

    const qcm = new Qcm({
        id: maxId + 1,
        name: rawObject.name,
        subject: rawObject.subject,
        nbpoints: Number(rawObject.nbpoints),
        questions: rawObject.questions || [],  
        answers: rawObject.answers || []  
    });

    qcms.push(qcm);
}

module.exports = { qcms, addQcm };