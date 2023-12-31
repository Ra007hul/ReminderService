const cron = require('node-cron');
const {fetchPendingEmails} = require('../services/email-services');
const emailService = require('../services/email-services');
const sender = require('../config/emailConfig')


const setupJobs = ()=>{
    cron.schedule('*/1 * * * *', async ()=>{
         const response = await fetchPendingEmails();
         console.log(response);
         response.forEach(
            (email)=>{
                sender.sendMail({
                    to : email.recepientEmail,
                    subject : email.subject,
                    text : email.content
                }, async (err,data)=>{
                     if(err){
                        console.log(err);
                     }
                     else{
                        console.log(data);
                        await emailService.updateTicket(email.id,{status : "SUCCESS"})
                     }
                }
                
                )
            }
         );
         console.log(response);
        });
}
    


module.exports = {setupJobs}