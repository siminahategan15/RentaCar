using AutoShop.Models;
using SQLite;
using System.Data;

namespace AutoShop.Repositories
{
    public static class CarRepository
    {
        private static SQLiteAsyncConnection database;

        static CarRepository()
        { 
            var applicationPath = Path.GetDirectoryName(typeof(CarRepository).Assembly.Location);
            var databasePath = Path.Combine(applicationPath, "data1.db");

            database = new SQLiteAsyncConnection(databasePath);
            database.CreateTableAsync<Car>().Wait();// cu wait dupa ce avem conformarea ca constr exista incheie rularea
            // "C:\\" + "\\Windows"

        }
        public static async Task<List<Car>> GetAll()
        {
            return await database.Table<Car>().ToListAsync();
            
        }    //conventie c# sa mearga cu async

        public static async Task<Car> GetCar(int id)//
        {
            // daca era brand care nu e unic 
            return await database.Table<Car>().FirstOrDefaultAsync(car => car.IdCar == id);
           // return await database.GetAsync<Car>(id);
        }

        public static async Task<Car> AddCar(Car car) //add/post
        {
            await database.InsertAsync(car);
            return car;
        }

        public static async Task<Car> UpdateCar(int id, Car updatedCar)//update   returneaza ce s a modificat
        {
            Car existingCar=await GetCar(id);
          
            existingCar.Brand=updatedCar.Brand;
            existingCar.Model=updatedCar.Model;
            existingCar.ProductionYear=updatedCar.ProductionYear;
            existingCar.Stock=updatedCar.Stock;
            await database.UpdateAsync(existingCar);
            return existingCar;
        }

        public static async Task<Car> DeleteCar(int id)
        {
            Car wantedCar=await GetCar(id);
            await database.Table<Car>().DeleteAsync(car => car.IdCar == id);
            return wantedCar;
        }


    }
}
