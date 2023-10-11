using SQLite;
using System.ComponentModel.DataAnnotations;
namespace AutoShop.Models
{
    public class User
    {
        [PrimaryKey]
        [NotNull]
        [AutoIncrement]
        public int IdUser { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
            
            
      
    
    }
}
