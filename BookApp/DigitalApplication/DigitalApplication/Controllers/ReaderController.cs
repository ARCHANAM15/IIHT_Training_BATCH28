using DigitalApplication.Models;
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
    public class ReaderController : ControllerBase
    {
        DigitalBookContext db = new DigitalBookContext();
        [HttpGet]
        
        public IEnumerable<Book> SearchAllBooks(string title, string publisher)
        {
            List<Book> allAuthorBooks = db.Books.Where(x => x.Title.Contains(title) || x.Publisher.Contains(publisher)).ToList();
            return allAuthorBooks;
        }
    }
}
