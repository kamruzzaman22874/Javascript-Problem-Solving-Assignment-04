// 1. তোমাকে একটা function দেওয়া হবে called “mindGame()” যা ইনপুট হিসেবে একটা positive number নিবে।
// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে।

function mindGame(number) {
    let output =(number * 3 + 10) / 2 - 5;
    return output;
}

let output = mindGame(50);
console.log(output);


// 2. তোমাকে একটা function দেওয়া হবে called “evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে।
// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে।
// আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।

function evenOdd(names) {

        if (typeof(names.length % 2) === 0) {
				return 'even';
        }
        else {

			return 'Odd';
    }
    }

const stringName = 'Batch7 akas';
const result = evenOdd(stringName);
console.log(result);


// 3. তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।
// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং ৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.

function isLGSeven(number) {
    if (typeof number === "number") {
			let absolute_difference = number - 7;

			if (absolute_difference < 7) {
				return absolute_difference;
            }
            else
				return (absolute_difference * 2);
    }
    return 'please enter a valid number'
    }

const result1 = isLGSeven(-15)
console.log(result1);

//4. তোমাকে একটা function দেওয়া হবে called findingBadData()”. এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. এখন তোমার task: array তে কতগুলো Bad data আছে
// সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

function findingBadData(badData) {

    let negativeNumber = 0;
    
		for (let i = 0; i < badData.length; i++) {
			let data = badData[i];
            if (data < 0) {
                negativeNumber++;
            }
	}
	return negativeNumber;
   }

const dataInfo = [-4, -9, -5, -33, -55];
const result = findingBadData(dataInfo)
console.log(result);

//5. তোমাকে একটা function দেওয়া হবে called gemsToDiamond()”. এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।Sample

function gemsToDiamond(friendOne, friendTwo, friendThree) {
    let firstFriendGems = 21;
    let secondFriendGems = 32;
    let thirdFriendGems = 43;

    let friestFriendGemsTotal = firstFriendGems * friendOne;
    let secondFriendGemsTotal = secondFriendGems * friendTwo;
    let thirdFriendGemsTotal = thirdFriendGems * friendThree;

    let totalFriendGems = friestFriendGemsTotal + secondFriendGemsTotal + thirdFriendGemsTotal;

    if (totalFriendGems > 1000 * 2) {
        let totalDimond = totalFriendGems - 2000;
        return totalDimond;
    }
    return totalFriendGems;
}

const totalGems = gemsToDiamond(100, 5, 1);
console.log(totalGems);