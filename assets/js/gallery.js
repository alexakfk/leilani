function openPopup(folderName) {
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popupContent");
        popupContent.innerHTML = "";

        const imageContainer = document.createElement("div"); // Create a container for the images
        imageContainer.classList.add("image-container"); // Add a CSS class to the container

        // Add photos to the image container
        // You can customize this part to load photos dynamically based on the folderName
        if (folderName === "folder1") {
          const photos = [
            "assets/images/gallery/alaWaiElementary/alaWaiElementary1.jpg",
            "assets/images/gallery/alaWaiElementary/alaWaiElementary2.jpg",
            "assets/images/gallery/alaWaiElementary/alaWaiElementary3.jpg",
            "assets/images/gallery/alaWaiElementary/alaWaiElementary4.jpg"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder2") {
          const photos = [
            "assets/images/gallery/childrenOfWoundedWarriors/childrenOfWoundedWarriors2.jpg"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder3") {
          const photos = [
            "assets/images/gallery/familyLiteracyLibraries/familyLiteracyLibraries1.jpeg",
            "assets/images/gallery/familyLiteracyLibraries/familyLiteracyLibraries2.jpeg",
            "assets/images/gallery/familyLiteracyLibraries/familyLiteracyLibraries3.jpeg"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder4") { 
          const photos = [
            "assets/images/gallery/iolaniReadAloud/iolaniReadAloud1.png",
            "assets/images/gallery/iolaniReadAloud/iolaniReadAloud2.png",
            "assets/images/gallery/iolaniReadAloud/iolaniReadAloud3.png",
            "assets/images/gallery/iolaniReadAloud/iolaniReadAloud4.png",
            "assets/images/gallery/iolaniReadAloud/iolaniReadAloud5.png",
            "assets/images/gallery/iolaniReadAloud/iolaniReadAloud7.jpg",
            "assets/images/gallery/iolaniReadAloud/iolaniReadAloud8.jpg",
            "assets/images/gallery/iolaniReadAloud/iolaniReadAloud9.jpeg"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder5") { 
          const photos = [
            "assets/images/gallery/japaneseExchange/japaneseExchange1.jpg",
            "assets/images/gallery/japaneseExchange/japaneseExchange2.jpg",
            "assets/images/gallery/japaneseExchange/japaneseExchange3.png"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder6") { 
          const photos = [
            "assets/images/gallery/kapiolaniMedicalCenter/kapiolaniMedicalCenter1.jpg",
            "assets/images/gallery/kapiolaniMedicalCenter/kapiolaniMedicalCenter2.jpg",
            "assets/images/gallery/kapiolaniMedicalCenter/kapiolaniMedicalCenter3.jpg",
            "assets/images/gallery/kapiolaniMedicalCenter/kapiolaniMedicalCenter4.jpg",
            "assets/images/gallery/kapiolaniMedicalCenter/kapiolaniMedicalCenter5.jpg"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder7") { 
          const photos = [
            "assets/images/gallery/preschool/preschool1.jpg",
            "assets/images/gallery/preschool/preschool2.jpg",
            "assets/images/gallery/preschool/preschool3.jpg"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder8") { 
          const photos = [
            "assets/images/gallery/storytimeAtBarnes/storytimeAtBarnes1.jpg",
            "assets/images/gallery/storytimeAtBarnes/storytimeAtBarnes2.jpg",
            "assets/images/gallery/storytimeAtBarnes/storytimeAtBarnes3.jpg",
            "assets/images/gallery/storytimeAtBarnes/storytimeAtBarnes4.jpg"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder9") { 
          const photos = [
            "assets/images/gallery/waikeleElementary/waikeleElementary1.JPG"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder10") { 
          const photos = [
            "assets/images/gallery/waikikiElementarSchool/waikikiElementarSchool1.jpg",
            "assets/images/gallery/waikikiElementarSchool/waikikiElementarSchool2.jpg",
            "assets/images/gallery/waikikiElementarSchool/waikikiElementarSchool3.jpg",
            "assets/images/gallery/waikikiElementarSchool/waikikiElementarSchool4.jpg",
            "assets/images/gallery/waikikiElementarSchool/waikikiElementarSchool5.jpg",
            "assets/images/gallery/waikikiElementarSchool/waikikiElementarSchool6.jpg",
            "assets/images/gallery/waikikiElementarSchool/waikikiElementarSchool7.png"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } else if (folderName === "folder11") { 
          const photos = [
            "assets/images/gallery/waimaluElementarySchool/waimaluElementarySchool1.png"
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        }else if (folderName === "folder12") {
          const photos = [
            "assets/images/gallery/wardStoryTime/wardStoryTime1.jpg",
            "assets/images/gallery/wardStoryTime/wardStoryTime2.jpg",
            "assets/images/gallery/wardStoryTime/wardStoryTime3.jpg",
            "assets/images/gallery/wardStoryTime/wardStoryTime4.jpg",
          ];
          photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            imageContainer.appendChild(img); // Append the images to the container
          });
        } 

        popupContent.appendChild(imageContainer); // Append the image container to the popup content

        popup.style.display = "block";
      }
      function closePopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "none";
      }