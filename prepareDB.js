import fs from 'node:fs'

async function prepareData() {
  try {
    // console.log("prepare function for db.json")
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()

    // eslint-disable-next-line no-unused-vars
    const {total, skip, limit, ...cleanData} = data

    const db = {
      ...cleanData,
      users: [],
      carts: []
    }
    const jsonString = (JSON.stringify(db, null, 2))
    fs.writeFileSync('db.json', jsonString)
    console.log("✅ สร้างไฟล์ db.json สำเร็จเรียบร้อย!")
  } catch(error) {
    console.error("Error fetching data:", error)
  }
}

prepareData()