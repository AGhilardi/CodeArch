using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnetangular.Controllers
{
    [ApiController]
    [Route("title")]
    public class TitleController : ControllerBase
    {
         [HttpGet]
        public List<String> Get(){
           List<String> titles= new List<string>();
           titles.Add("title");
            return titles ;
        }
    }
}