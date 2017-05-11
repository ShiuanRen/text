using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace linebot01.Controllers
{
    public class LineChatController : ApiController
    {
        [HttpPost]
        public IHttpActionResult POST()
        {
            string ChannelAccessToken = "02RotRVB1s+q9e8nuBbTsLjJ3OSdChRbSq//M8HTz3p9j0jenQxy+aWSTU5nPAAa3tpvBmEjOYZ+wagNqmrasZWKLulkc00y0ayA1/FQuro8cA6FBW94+E0u9R89qMptmW/abPQ1wBr9ST1/o/1qEQdB04t89/1O/w1cDnyilFU=";

            try
            {
                //���o http Post RawData(should be JSON)
                string postData = Request.Content.ReadAsStringAsync().Result;
                //��RJSON
                var ReceivedMessage = isRock.LineBot.Utility.Parsing(postData);
                //�^�аT��
                string Message;
                Message = "�A���F:" + ReceivedMessage.events[0].message.text;
                //�^�ХΤ�
                isRock.LineBot.Utility.ReplyMessage(ReceivedMessage.events[0].replyToken, Message, ChannelAccessToken);
                //�^��API OK
                return Ok();
            }
            catch (Exception ex)
            {
                return Ok();
            }
        }
    }
}



