<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-md-12">
                <h2>Выбери:</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 py-4">
                <div class="btn bg-primary text-light m-4 p-4" @click="$router.push('/kms-to-liters')">
                    <h3>км в литры</h3> 
                </div>
            </div>
            <div class="col-md-6 py-4">
                <div class="btn bg-primary text-light m-4 p-4" @click="$router.push('/liters-to-kms')">
                    <h3>литры в км</h3> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',

}
</script>


<style scoped>


.col-md-6 {
    background-color: rgb(128, 206, 173);
}
.btn {
    width: 80%;
    height: 80%;
}
</style>