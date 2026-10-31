/* =========================================================
   CTRL+Z — SAVE SYSTEM
========================================================= */

window.VNSave = {


    key:
        "ctrlz-vn-save",


    save(data) {

        localStorage.setItem(

            this.key,

            JSON.stringify(
                data
            )

        );


        console.log(
            "Game berhasil disimpan."
        );

    },


    load() {

        const saveData =
            localStorage.getItem(
                this.key
            );


        if (!saveData) {

            return null;

        }


        try {

            return JSON.parse(
                saveData
            );

        }

        catch (error) {

            console.error(
                "Save gagal dibaca:",
                error
            );


            return null;

        }

    },


    exists() {

        return (
            localStorage.getItem(
                this.key
            )
            !==
            null
        );

    },


    remove() {

        localStorage.removeItem(
            this.key
        );

    }

};