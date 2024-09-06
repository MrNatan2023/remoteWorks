async function fetchJobs() {
    try {
        const response = await fetch('http://localhost:3000/jobs'); 
        const jobs = await response.json(); 

        const jobContainer = document.querySelector('.job-container'); 
        jobContainer.innerHTML = ''; 

        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');

            jobCard.innerHTML = `
                <p><strong>Nome da Companhia:</strong></p>
                <h3>${job.name_company}</h3>
                <p><strong>Tipo de Emprego:</strong></p>
                <p>${job.type_of_employment}</p>
                <p><strong>Qualificações:</strong></p>
                <p>${job.qualifications}</p>
                <p><strong>Descrição:</strong></p>
                <p> ${job.description}</p>
                <p><strong>Benefícios:</strong></p>
                <p>${job.benefits}</p>
            `;

            jobContainer.appendChild(jobCard); 
        });

    } catch (error) {
        console.error('Erro ao buscar vagas:', error); 
    }
}

document.addEventListener('DOMContentLoaded', fetchJobs);
