document.addEventListener('DOMContentLoaded', () => {
  fetchCities()
   // addEventListener's second param is lambda, but we use method reference since we have no args, otherwise it would be ('submit', () => handleFormSubmit ())
  document.getElementById('teacherForm').addEventListener('submit', handleFormSubmit)
})

const fetchCities = async () => {
  try {
    // const response = await axios.get('https://api.aueb.gr/cities')
    const response = await axios.get('./cities.json')
    const cities = response.data

    document.getElementById('city').innerHTML = cities
                                                    .sort((a, b) => a.name.localeCompare(b.name, "el-GR"))
                                                    .map(city => `<option value="${city.id}">${city.name}</option>`)
                                                    .join('')
  } catch (error) {
    console.error('Error fetching cities')
  }
}

const handleFormSubmit = async (event) => {
  event.preventDefault()
  const payload = {
    fistname: document.getElementById('firstname').value.trim(),
    lastname: document.getElementById('lastname').value.trim(),
    vat: document.getElementById('vat').value.trim(),
    city: document.getElementById('city').value.trim()
  }

  try {
    // const response = await axios.post('https://api.aueb.gr', payload)
    alert('Teacher data submitted:\n' + JSON.stringify(payload, null, "\n\t"))
  } catch(error) {
    console.error('Error fetching cities')
  }
}