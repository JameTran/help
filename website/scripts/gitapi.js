requestUserRepos(gitHubUsername)
.then(response => response.json())
.then(data => {
            let ul = document.getElementById('userRepos');
            let li = document.createElement('li');
            li.classList.add('list-group-item')
            li.innerHTML = (`
        <p><strong>Repo:</strong> ${data[i].name}</p>
        <p><strong>Description:</strong> ${data[i].description}</p>
        <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
    `);
            ul.appendChild(li);
    }
)

function requestUserRepos(JameTran) {
return Promise.resolve(fetch(`https://api.github.com/users/${username}/repos`));
}