require("jasmine-custom-message");
var request = require("request");
var Actual = jasmine.customMessage.Actual;

var util = require("./test-util");
var clientSource = util.clientSource; 
describe("Angoose Server Tests", function(){
     // this one cannot test with others
     
     xit("Load client file from http", function(done){
       require("./server"); //.startServer(configs);
       request('http://localhost:9988' +util.angooseOpts.urlPrefix+'/angoose-client.js', function(err, response, body){
            try{
                eval(body);
             }
             catch(er){
                 console.error("ERRORERRORERRORERRORERRORERRORERRORERRORv", body, er)
             }
            var SampleUser = AngooseClient.getClass("SampleUser");
            var suser = new SampleUser( util.testuser);
            expect(suser.getFullname()).toBe("Gaelyn Hurd");
            done();
       });
    }); 
}); 
