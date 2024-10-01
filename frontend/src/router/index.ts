import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { el: '#app', top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/dashboard/Dashboard.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/index-2',
      name: 'index_2',
      component: () => import('../views/dashboard/Dashboard.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/employee',
      name: 'employee',
      component: () => import('../views/Employee.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/core-hr',
      name: 'core_hr',
      component: () => import('../views/CoreHr.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/finance',
      name: 'finance',
      component: () => import('../views/Finance.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('../views/tasks/Task.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/task-summary',
      name: 'task-summary',
      component: () => import('../views/tasks/TaskSummary.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/performance',
      name: 'performance',
      component: () => import('../views/Performance.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/Project.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/Reports.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/manage-client',
      name: 'manage_client',
      component: () => import('../views/ManageClient.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/blog-1',
      name: 'blog_1',
      component: () => import('../views/Blog.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/svg-icon',
      name: 'svg_icon',
      component: () => import('../views/SvgIcons.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/app/Chat.vue'),
      meta: { layout2: 'layout2' }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/app/userManeger/User.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/edit-profile',
      name: 'edit_profile',
      component: () => import('../views/app/userManeger/AddUser.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/user-roles',
      name: 'user_roles',
      component: () => import('../views/app/userManeger/UserRoles.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/add-role',
      name: 'add_role',
      component: () => import('../views/app/userManeger/AddRole.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/app-profile-1',
      name: 'app_profile_1',
      component: () => import('../views/app/userManeger/AppProfile1.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/app-profile',
      name: 'app_profile',
      component: () => import('../views/app/userManeger/AppProfile1.vue'),
      meta: { layout: 'layout' }
    },
    {
      path: '/app-profile-2',
      name: 'app_profile_2',
      component: () => import('../views/app/userManeger/AppProfile2.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/post-details',
      name: 'post_details',
      component: () => import('../views/app/userManeger/PostDetail.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('../views/app/customerManeger/Customer.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/customer-profile',
      name: 'customer_profile',
      component: () => import('../views/app/customerManeger/CustomerProfile.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/app/Contacts.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/email-compose',
      name: 'email_compose',
      component: () => import('../views/app/email/Compose.vue'),
      meta: { layout5: 'layout5' }
    },
    {
      path: '/email-inbox',
      name: 'email_inbox',
      component: () => import('../views/app/email/EmailInbox.vue'),
      meta: { layout5: 'layout5' }
    },
    {
      path: '/email-read',
      name: 'email_read',
      component: () => import('../views/app/email/EmailRead.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/app-calender',
      name: 'app_calender',
      component: () => import('../views/app/Calender.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ecom-product-grid',
      name: 'ecom_product_grid',
      component: () => import('../views/app/shop/ProductGrid.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ecom-product-list',
      name: 'ecom_product_list',
      component: () => import('../views/app/shop/ProductList.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ecom-product-detail',
      name: 'ecom_product_detail',
      component: () => import('../views/app/shop/ProductDetails.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ecom-product-order',
      name: 'ecom_product_order',
      component: () => import('../views/app/shop/ProductOrder.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ecom-checkout',
      name: 'ecom_checkout',
      component: () => import('../views/app/shop/Checkout.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ecom-invoice',
      name: 'invoice',
      component: () => import('../views/app/shop/Invoice.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ecom-customes',
      name: 'customes',
      component: () => import('../views/app/shop/Customers.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/auto-write',
      name: 'auto_write',
      component: () => import('../views/aikit/AutoWrite.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/scheduled',
      name: 'scheduled',
      component: () => import('../views/aikit/Scheduled.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/repurpose',
      name: 'repurpose',
      component: () => import('../views/aikit/Repurpose.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/rss',
      name: 'rss',
      component: () => import('../views/aikit/Rss.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/chatbot',
      name: 'chatbot',
      component: () => import('../views/aikit/Chatbot.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/fine-tune-models',
      name: 'fine_tune_models',
      component: () => import('../views/aikit/FineTuneModales.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/prompt',
      name: 'prompt',
      component: () => import('../views/aikit/Prompt.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/aikit/Setting.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/import',
      name: 'import',
      component: () => import('../views/aikit/Import.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('../views/cms/Content.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/cms/Menu.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/email-template',
      name: 'email_template',
      component: () => import('../views/cms/EmailTemplate.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/cms/Blog.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/content-add',
      name: 'content_add',
      component: () => import('../views/cms/AddContent.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/add-email',
      name: 'add_email',
      component: () => import('../views/cms/AddEmail.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/add-blog',
      name: 'add_blog',
      component: () => import('../views/cms/AddBlog.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/blog-category',
      name: 'add_category',
      component: () => import('../views/cms/BlogCategory.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/chart-flot',
      name: 'chart_flot',
      component: () => import('../views/charts/Flot.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/chart-apax',
      name: 'chart_apax',
      component: () => import('../views/charts/Morris.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/chart-chartjs',
      name: 'chart_chartjs',
      component: () => import('../views/charts/ChartJs.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-accordion',
      name: 'ui_accordion',
      component: () => import('../views/bootstrap/Accordian.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-alert',
      name: 'ui_alert',
      component: () => import('../views/bootstrap/Alerts.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-badge',
      name: 'ui_badge',
      component: () => import('../views/bootstrap/Badge.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-button',
      name: 'ui_button',
      component: () => import('../views/bootstrap/Buttons.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-modal',
      name: 'ui_modal',
      component: () => import('../views/bootstrap/Modal.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-button-group',
      name: 'ui_button_group',
      component: () => import('../views/bootstrap/ButtonGroup.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-list-group',
      name: 'ui_list_group',
      component: () => import('../views/bootstrap/ListGroup.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-card',
      name: 'ui_card',
      component: () => import('../views/bootstrap/Card.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-carousel',
      name: 'ui_carousel',
      component: () => import('../views/bootstrap/Carousel.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-dropdown',
      name: 'ui_dropdown',
      component: () => import('../views/bootstrap/Dropdown.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-popover',
      name: 'ui_popover',
      component: () => import('../views/bootstrap/Popover.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-progressbar',
      name: 'ui_progressbar',
      component: () => import('../views/bootstrap/Progressbar.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-tab',
      name: 'ui_tab',
      component: () => import('../views/bootstrap/Tab.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-typography',
      name: 'ui_typography',
      component: () => import('../views/bootstrap/Typography.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-pagination',
      name: 'ui_pagination',
      component: () => import('../views/bootstrap/Pagination.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/ui-grid',
      name: 'ui_grid',
      component: () => import('../views/bootstrap/Grid.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/uc-select2',
      name: 'uc_select2',
      component: () => import('../views/plugins/Select2.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/uc-nestable',
      name: 'uc_nestable',
      component: () => import('../views/plugins/Nestable.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/uc-sweetalert',
      name: 'uc_sweetalert',
      component: () => import('../views/plugins/Sweetalert.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/uc-toastr',
      name: 'uc_toastr',
      component: () => import('../views/plugins/Toastr.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/map-jqvmap',
      name: 'map_jqvmap',
      component: () => import('../views/plugins/JqvMap.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/uc-lightgallery',
      name: 'uc_lightgallery',
      component: () => import('../views/plugins/LightGallery.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/widget-basic',
      name: 'widget_basic',
      component: () => import('../views/Widget.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/form-element',
      name: 'form_element',
      component: () => import('../views/Forms/FormElement.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/form-wizard',
      name: 'form_wizard',
      component: () => import('../views/Forms/FormWizard.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/form-ckeditor',
      name: 'form_ckeditor',
      component: () => import('../views/Forms/Ckeditor.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/form-pickers',
      name: 'form_pickers',
      // @ts-ignore
      component: () => import('../views/Forms/FormPickers.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/form-validation',
      name: 'form_validation',
      component: () => import('../views/Forms/FormValidation.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/table-bootstrap-basic',
      name: 'table_bootstrap_basic',
      component: () => import('../views/table/TableBootstrap.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/table-datatable-basic',
      name: 'table_datatable_basic',
      component: () => import('../views/table/TableDatabase.vue'),
      meta: { layout3: 'layout3' }
    },
    {
      path: '/page-login',
      name: 'page_login',
      component: () => import('../views/pages/Login.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/page-register',
      name: 'page_register',
      component: () => import('../views/pages/Register.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/page-forgot-password',
      name: 'page_forgot_password',
      component: () => import('../views/pages/ForgetPassword.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/page-error-400',
      name: 'page_error_400',
      component: () => import('../views/pages/error/Error400.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/page-error-403',
      name: 'page_error_403',
      component: () => import('../views/pages/error/Error403.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/page-error-404',
      name: 'page_error_404',
      component: () => import('../views/pages/error/Error404.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/page-error-500',
      name: 'page_error_500',
      component: () => import('../views/pages/error/Error500.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/page-error-503',
      name: 'page_error_503',
      component: () => import('../views/pages/error/Error503.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/page-lock-screen',
      name: 'page_lock_screen',
      component: () => import('../views/pages/LockScreen.vue'),
      meta: { layout4: 'layout4' }
    },
    {
      path: '/empty-page',
      name: 'empty_page',
      component: () => import('../views/pages/EmptyPage.vue'),
      meta: { layout3: 'layout3' }
    }
  ]
})

export default router
