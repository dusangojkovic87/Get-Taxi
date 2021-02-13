using System.Threading.Tasks;
using Get_Taxi.Models;
using Get_Taxi.Services;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Message : BaseController
    {
        private readonly IMessageRepository _messageServise;
        public Message(IMessageRepository messageServise)
        {
            _messageServise = messageServise;

        }

        [HttpPost]
        [Route("send")]
        public async Task<IActionResult> send(MessageAddModel model)
        {

            if (ModelState.IsValid)
            {
                var saved = await _messageServise.addMessage(model);
                if (saved)
                {
                    return Ok(new { message = "message sent!" });
                }
            }

            return BadRequest(ModelState);

        }
    }
}