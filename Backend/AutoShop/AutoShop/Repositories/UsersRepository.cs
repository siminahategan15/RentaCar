using AutoShop.Models;
using SQLite;

namespace AutoShop.Repositories
{
    public class UsersRepository
    {

        private static SQLiteAsyncConnection database;

        static UsersRepository()
        {
            var applicationPath = Path.GetDirectoryName(typeof(UsersRepository).Assembly.Location);
            var databasePath = Path.Combine(applicationPath, "data1.db");

            database = new SQLiteAsyncConnection(databasePath);
            database.CreateTableAsync<User>().Wait();// cu wait dupa ce avem confirmarea ca constr exista incheie rularea
            // "C:\\" + "\\Windows"

        }
        public static async Task<List<User>> GetAll()
        {
            try
            {
                return await database.Table<User>().ToListAsync();
            }
            catch (Exception ex)
            {
                // Handle the exception (e.g., log or return an empty list)
                Console.WriteLine($"Error retrieving data: {ex}");
                return new List<User>();
            }

        }    //conventie c# sa mearga cu async

        public static async Task<User> GetUser(int id)//
        {
            // daca era brand care nu e unic 
            return await database.Table<User>().FirstOrDefaultAsync(user => user.IdUser == id);
            // return await database.GetAsync<Car>(id);
        }

        public static async Task<User> AddUser(User user) //add/post
        {
            await database.InsertAsync(user);
            return user;
        }

        public static async Task<User> UpdateUser(int id, User updatedUser)//update   returneaza ce s a modificat
        {
            User existingUser = await GetUser(id);

            existingUser.FirstName = updatedUser.FirstName;
            existingUser.LastName = updatedUser.LastName;
            existingUser.UserName = updatedUser.UserName;
            existingUser.Password = updatedUser.Password;
            existingUser.Email = updatedUser.Email;
            await database.UpdateAsync(existingUser);
            return existingUser;
        }

        public static async Task<User> DeleteUser(int id)
        {
            User wantedUser = await GetUser(id);
            await database.Table<User>().DeleteAsync(user => user.IdUser == id);
            return wantedUser;
        }


    }
}
