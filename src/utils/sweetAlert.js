import Swal from 'sweetalert2';

export const alertUpdatedCorrectly = () => {
  Swal.fire({
    icon: 'success',
    iconColor: '#bfd732',
    title: 'Updated correctly!',
    showConfirmButton: false,
    timer: 1650,

    position: 'center',
    width: '20rem',
  });
};
