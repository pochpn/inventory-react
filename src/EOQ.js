export const findEOQ = (d,o,c) =>
{
    if(c === 0)
    {
        return 0;
    }
    var sum=0;
    sum = Math.sqrt((2*d*o)/c).toFixed(2)
    return isNaN(sum) ? 0: sum;

}

export const findNY = (d,o,c) =>
{
    if(c === 0)
    {
        return 0;
    }
    var sum=0;
    sum = (d/(Math.sqrt((2*d*o)/c))).toFixed(2)
    return isNaN(sum) ? 0: sum;

}

export const findLead = (d,o,c,day) =>
{
    if(day === 0 || c === 0)
    {
        return 0;
    }
    var sum=0;
    sum = (day/findNY(d,o,c)).toFixed(2)
    return isNaN(sum) ? 0: sum;

}