const {qcms, addQcm} = require('../models/inmemory');

const displayQcms = (req, res) => {
    for (let qcm of qcms) {
        console.log(`${qcm.nbpoints}: ${typeof(qcm.nbpoints)}`);
    }
    res.render('qcms', {qcms: qcms});
};

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === id) || { questions: [] }; 

    qcm.questions = qcm.questions || [];

    res.render('qcm', { qcm }); 
}

const displayQcmJson = (req, res) => {
    res.json({qcms});
}

const displayFormQcm = (req, res) => {
    res.render('newqcm');
};

const createNewForm = (req, res) => {
    let maxId = 0;

    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });

    const newQcm = {
        id: maxId + 1,
        name: req.body.name,
        subject: req.body.subject,
        nbpoints: req.body.nbpoints,
        questions: req.body.questions || [],   
        answers: req.body.answers || []        
    };

    addQcm(newQcm);
    res.redirect('/qcms');
};


module.exports = {displayQcms, displayFormQcm, createNewForm, displayQcmJson, displayQcmDetailed};