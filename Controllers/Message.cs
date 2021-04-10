using System.Collections.Generic;
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Message : BaseController
    {
        private readonly IUnitOfWork _repository;
        private readonly IMapper _mapper;
        public Message(IUnitOfWork repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;

        }

        [HttpPost]
        [Route("send")]
        public IActionResult send(MessageAddModel model)
        {
            if (ModelState.IsValid)
            {
                var message = _mapper.Map<Messages>(model);
                _repository.Messages.Add(message);

                if(_repository.Save() > 0){
                    return Ok(new {message = "message sent!"});
                }
                
            }
            return BadRequest(ModelState);   
        }

        [HttpGet]
        [Route("get-messages")]
        public IActionResult getMessages(){

        var messagesFromDb = _repository.Messages.GetMessages();
        var messagesToReturn =  _mapper.Map<IEnumerable<MessageGetModel>>(messagesFromDb);
        return Ok(messagesToReturn);
        }

    }
}