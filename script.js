async function fetchJobs(params) {
    try{
        const reponse = await fetch('http://localhost:3000/jobs')
        const jobs = await reponse.json()
        
        const jobContainer = document.querySelector('.job-container')

        jobContainer.innerHTML = '';

        jobs.forEach(job => {
            const jobCard = document.createElement('div')
            jobCard.classList.add('job-card')

            jobCard.innerHTML = `
            <h3>${job.name_company}</h3>
            <p><strong>Tipo de Emprego:</strong> ${job.type_of_employment}</p>
            <p><strong>Qualificações:</strong> ${job.qualifications}</p>
            <p><strong>Descrição:</strong> ${job.description}</p>
            <p><strong>Benefícios:</strong> ${job.benefits}</p>
        `;
            jobContainer.appendChild(jobCard)

        });


    } catch(error){
        console.log('Erro ao buscar vagas:', error)
    }  
}

document.addEventListener('DOMContentLoaded', fetchJobs);
