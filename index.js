$.get('song_list.txt', function (data) {
    const allSongs = data.split("\n");
    for (let i = 0; i < allSongs.length; i++) {
        const song = allSongs[i];
        const song_with_year = song.split('-');
        const songName = song_with_year[0];
        const songYear = song_with_year[1];

        let tableBody = document.getElementById("table_body");
        const newRow = document.createElement("tr");

        const firstCell = document.createElement("td");
        firstCell.classList.add("border");
        firstCell.textContent = i + 1;

        const secondCell = document.createElement("td");
        secondCell.classList.add("border");
        secondCell.textContent = songName;

        const thirdCell = document.createElement("td");
        thirdCell.classList.add("border");
        thirdCell.textContent = songYear;

        tableBody.appendChild(firstCell)
        tableBody.appendChild(secondCell)
        tableBody.appendChild(thirdCell)

        tableBody.appendChild(newRow)
    }
}, 'text');