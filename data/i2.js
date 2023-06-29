const fs = require("fs")

// 读取第一个JSON文件
fs.readFile("output.json", "utf8", (err, data1) => {
	if (err) {
		console.error("读取文件时出错:", err)
		return
	}

	// 读取第二个JSON文件
	fs.readFile("output2.json", "utf8", (err, data2) => {
		if (err) {
			console.error("读取文件时出错:", err)
			return
		}

		try {
			// 解析第一个JSON文件的数组
			const array1 = JSON.parse(data1)

			// 解析第二个JSON文件的数组
			const array2 = JSON.parse(data2)

			// 合并两个数组
			const mergedArray = array1.concat(array2)

			// 将结果写入新的JSON文件
			fs.writeFile(
				"output3.json",
				JSON.stringify(mergedArray),
				"utf8",
				(err) => {
					if (err) {
						console.error("写入文件时出错:", err)
						return
					}
					console.log("结果已成功写入到output.json文件中")
				}
			)
		} catch (err) {
			console.error("解析JSON时出错:", err)
		}
	})
})
