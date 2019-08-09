import styled from 'styled-components'
import theme from './theme';

const Tito = styled.div`
  */
  *{box-sizing:border-box}
  .tito-wrapper{border:1px solid #ccc;background:white;color:#333;margin:20px auto;padding:10px 0 0 0;width:100%}
  .tito-ticket-list{display:block;list-style-type:none;margin:0;padding:0;width:100%}
  #tito-previous-releases,.tito-ticket-list.tito-ticket-waitlist{margin:0}.tito-ticket.row{display:block;border-bottom:1px solid #ccc;margin:0 15px;min-height:54px;padding:10px 0}
  .tito-ticket:after{content:'';display:table;clear:both}
  .tito-ticket-name-wrapper,.tito-ticket-price-quantity-wrapper{border:none;display:block;float:left;width:100%}
  @media screen and (min-width: 520px){.tito-ticket-name-wrapper,.tito-ticket-price-quantity-wrapper{width:50%}}
  .tito-ticket-name{display:block;font-size:16px;font-weight:normal;line-height:1.2;margin:8px 0 5px}
  .tito-ticket-name .label.label-default{border:1px solid #333;color:#333;font-size:10px;font-weight:bold;margin-left:5px;padding:2px 5px;position:relative;top:-1px;text-transform:uppercase}
  .tito-ticket-name-wrapper .tito-tickets-remaining{background:#ddd;border:1px solid rgba(51,51,51,0.2);color:#333;font-size:10px;padding:2px 5px;position:relative;top:-3px;margin-left:10px;white-space:nowrap}
  .tito-ticket-description{color:#adadad;font-size:12px}
  .tito-degressive-price-desc+.tito-ticket-description{margin-top:.5rem}
  .tito-ticket-price-quantity{text-align:right;width:auto}
  @media screen and (min-width: 520px){.tito-ticket-price-quantity{float:right;display:flex;align-items:center;}}
  .tito-ticket-price{float:left;text-align:left;width:50%}
  @media screen and (min-width: 520px){.tito-ticket-price{text-align:right;width:auto}}
  .tito-ticket-quantity{float:right;min-width:70px}
  .tito-ticket-quantity span{margin:0 10px}
  input[type=text].tito-ticket-quantity-field,input[type=text].tito-ticket-donation-field{background-color:#fff;border:1px solid #ccc;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);color:#333;display:inline-block;font-size:14px;height:34px;line-height:1.42857143;margin:0;padding:6px 12px;text-align:center}
  input[type=text].tito-ticket-quantity-field{width:45px}
  input[type=text].tito-ticket-donation-field{width:85px;margin-left:6px}
  .tito-ticket-price span{display:block;font-size:16px;line-height:34px}
  .tito-ticket-vat{color:#adadad;font-size:10px;padding-bottom:5px}
  .tito-ticket-status span{background:#efefef;color:#adadad;display:inline-block;font-size:14px;height:34px;line-height:34px;min-width:90px;padding:0 10px;text-align:center;text-decoration:none;width:100%}
  .btn.btn-default.btn-waitlist{background:#fff;border:1px solid #ccc;color:#333;font-size:14px;height:34px;line-height:1.42857143;padding:6px 12px;white-space:nowrap;width:200px}
  .btn.btn-default.btn-waitlist:hover{border:1px solid #333}.tito-discount-code{display:block;margin:0 30px;padding:5px 0}
  @media screen and (min-width: 520px){.tito-discount-code{float:left}}
  .tito-discount-code-label{display:none}.btn.btn-default.tito-discount-apply-button{display:none}
  .tito-discount-code .tab-pane.tito-discount-code-show.active{display:none}
  .tito-discount-code .tab-pane.tito-discount-code-edit{display:block;visibility:visible}
  input.form-control.tito-discount-code-field.discount-code-field{background:#fff;border:1px solid #ccc;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);display:inline-block;font-size:14px;height:34px;line-height:1.42857143;margin:5px 0;padding:6px 12px;width:100%}
  @media screen and (min-width: 520px){input.form-control.tito-discount-code-field.discount-code-field{width:200px}}
  .tito-discount-code-show{padding-top:15px}.tito-discount-code-edit,.tito-discount-code-show{display:none}
  .tito-discount-code-edit.active,.tito-discount-code-show.active{display:inline-block}
  .tito-submit-wrapper{margin:0 15px;padding:10px 0;text-align:right}
  .tito-submit{background:${theme.colors.green};color:#fff;border-color:transparent;cursor:pointer;font-size:14px;height:34px;line-height:1.42857143;margin:0;padding:6px 12px;text-align:center;width:100%}
  @media screen and (min-width: 520px){.tito-submit{width:100px}}
  .tito-submit:hover{background:${theme.colors.greenLight}}
  .tito-ticket.tito-locked-ticket>div{padding:10px 0}
  .tito-ticket.tito-locked-ticket label,.tito-ticket.tito-locked-ticket span{opacity:.5}
  .locked-tickets-message p{font-size:14px;line-height:1.3;opacity:.5}
  .tito-badge-link{font-size:12px;display:inline-block;margin:15px 0 5px;text-align:center;width:100%}
  .tito-badge-link a {color: ${theme.colors.green}}
  .tito-badge-link a:hover {color: ${theme.colors.greenLight}}
`

export default () => (
  <Tito>
    <script src='https://js.tito.io/v1' async></script>
    <tito-widget event="gdg-new-orleans/devfest-new-orleans-2019"></tito-widget>
  </Tito>
)
