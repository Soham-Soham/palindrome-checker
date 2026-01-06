
const checkPalindrome = (req,res)=>{
    const {inputWord} = req.body
    const word = inputWord.trim().toLowerCase()

    if(!word){
        return res.status(400).json({message:"Please fill required input"})
    }

    let isPalindrome = (word === word.split("").reverse().join(""))

    if(!isPalindrome){
        return res.status(200).json({message:"Not a valid Palindrome"})
    }

    return res.status(200).json({message:"valid Palindrome"})
}

export default checkPalindrome