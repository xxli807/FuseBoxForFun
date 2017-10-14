using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ApiBackend.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(){
            
            return View();
        }

        public ActionResult Data()
        {
            return Json(new {
                success = true
            });
        }
    }
}
