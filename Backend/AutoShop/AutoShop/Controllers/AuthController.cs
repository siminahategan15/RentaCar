using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;


namespace AutoShop.Models
{
    [ApiController]
    [Route("api")]
    public class AuthController : ControllerBase
    {
        private static List<User> users = new List<User>();
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if(users.Any(u=>u.UserName==user.UserName))
            {
                return BadRequest(new { message="Username is already taken"});
            }

            users.Add(user);
            return Ok(new { message="Registration success"});

        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var dbUser = users.FirstOrDefault(u=>u.UserName == user.UserName);

            if(dbUser==null)
            {
                return BadRequest(new { message = "User not found" });
            }

            if(user.Password!=dbUser.Password)
            {
                return BadRequest(new { message = "Invalid password" });
            }
            return Ok(new { message = "Login successful" });

        }
    }
}
