using DigitalApplication.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DigitalApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        DigitalBookContext db = new DigitalBookContext();
        [HttpGet]
       
        public IEnumerable<Book> Get()
        {
            return db.Books;
        }
        [HttpPost]
        public IActionResult Post([FromBody] Book customer)
        {
            db.Books.Add(customer);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }
        [HttpPut]
        public IActionResult put([FromBody] Book customer)
        {
            db.Books.Update(customer);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var data = db.Books.Where(x => x.Id == id).FirstOrDefault();
            db.Books.Remove(data);
            db.SaveChanges();
            //
            var response = new { Status = "Success" };
            return Ok(response);
        }
    }
}

