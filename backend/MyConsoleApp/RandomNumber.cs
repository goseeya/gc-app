namespace RandomNumber;


public class RandomNumberGenerator
{
    public static double GetRandomNumber()
    {
        return new Random().Next(1, 11);
    }
}
